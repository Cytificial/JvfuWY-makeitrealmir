/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ImageVariationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).imageVariation.createMany(input as any))),

        create: procedure.input($Schema.ImageVariationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).imageVariation.create(input as any))),

        deleteMany: procedure.input($Schema.ImageVariationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).imageVariation.deleteMany(input as any))),

        delete: procedure.input($Schema.ImageVariationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).imageVariation.delete(input as any))),

        findFirst: procedure.input($Schema.ImageVariationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).imageVariation.findFirst(input as any))),

        findMany: procedure.input($Schema.ImageVariationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).imageVariation.findMany(input as any))),

        findUnique: procedure.input($Schema.ImageVariationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).imageVariation.findUnique(input as any))),

        updateMany: procedure.input($Schema.ImageVariationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).imageVariation.updateMany(input as any))),

        update: procedure.input($Schema.ImageVariationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).imageVariation.update(input as any))),

        count: procedure.input($Schema.ImageVariationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).imageVariation.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ImageVariationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImageVariationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImageVariationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImageVariationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ImageVariationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImageVariationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ImageVariationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ImageVariationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImageVariationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImageVariationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ImageVariationGetPayload<T>, Context>) => Promise<Prisma.ImageVariationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ImageVariationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImageVariationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImageVariationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImageVariationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ImageVariationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImageVariationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ImageVariationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ImageVariationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImageVariationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImageVariationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ImageVariationGetPayload<T>, Context>) => Promise<Prisma.ImageVariationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ImageVariationFindFirstArgs, TData = Prisma.ImageVariationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ImageVariationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ImageVariationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ImageVariationFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ImageVariationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ImageVariationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ImageVariationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ImageVariationFindManyArgs, TData = Array<Prisma.ImageVariationGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ImageVariationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ImageVariationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ImageVariationFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ImageVariationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ImageVariationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ImageVariationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ImageVariationFindUniqueArgs, TData = Prisma.ImageVariationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ImageVariationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ImageVariationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ImageVariationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ImageVariationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ImageVariationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ImageVariationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ImageVariationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImageVariationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImageVariationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImageVariationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ImageVariationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ImageVariationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ImageVariationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ImageVariationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ImageVariationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ImageVariationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ImageVariationGetPayload<T>, Context>) => Promise<Prisma.ImageVariationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ImageVariationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ImageVariationCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ImageVariationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ImageVariationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ImageVariationCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ImageVariationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ImageVariationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ImageVariationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
