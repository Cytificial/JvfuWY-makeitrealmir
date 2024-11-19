/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createModelRouter from "./Model.router";
import createImageRouter from "./Image.router";
import createImageVariationRouter from "./ImageVariation.router";
import createParameterRouter from "./Parameter.router";
import createCollectionRouter from "./Collection.router";
import createCollectionImageRouter from "./CollectionImage.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as ModelClientType } from "./Model.router";
import { ClientType as ImageClientType } from "./Image.router";
import { ClientType as ImageVariationClientType } from "./ImageVariation.router";
import { ClientType as ParameterClientType } from "./Parameter.router";
import { ClientType as CollectionClientType } from "./Collection.router";
import { ClientType as CollectionImageClientType } from "./CollectionImage.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        model: createModelRouter(router, procedure),
        image: createImageRouter(router, procedure),
        imageVariation: createImageVariationRouter(router, procedure),
        parameter: createParameterRouter(router, procedure),
        collection: createCollectionRouter(router, procedure),
        collectionImage: createCollectionImageRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    model: ModelClientType<AppRouter>;
    image: ImageClientType<AppRouter>;
    imageVariation: ImageVariationClientType<AppRouter>;
    parameter: ParameterClientType<AppRouter>;
    collection: CollectionClientType<AppRouter>;
    collectionImage: CollectionImageClientType<AppRouter>;
}
