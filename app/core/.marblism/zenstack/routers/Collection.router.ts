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

        createMany: procedure.input($Schema.CollectionInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.createMany(input as any))),

        create: procedure.input($Schema.CollectionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.create(input as any))),

        deleteMany: procedure.input($Schema.CollectionInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.deleteMany(input as any))),

        delete: procedure.input($Schema.CollectionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.delete(input as any))),

        findFirst: procedure.input($Schema.CollectionInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).collection.findFirst(input as any))),

        findMany: procedure.input($Schema.CollectionInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).collection.findMany(input as any))),

        findUnique: procedure.input($Schema.CollectionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).collection.findUnique(input as any))),

        updateMany: procedure.input($Schema.CollectionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.updateMany(input as any))),

        update: procedure.input($Schema.CollectionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.update(input as any))),

        count: procedure.input($Schema.CollectionInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).collection.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CollectionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CollectionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CollectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CollectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CollectionGetPayload<T>, Context>) => Promise<Prisma.CollectionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CollectionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CollectionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CollectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CollectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CollectionGetPayload<T>, Context>) => Promise<Prisma.CollectionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CollectionFindFirstArgs, TData = Prisma.CollectionGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CollectionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CollectionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CollectionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CollectionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CollectionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CollectionFindManyArgs, TData = Array<Prisma.CollectionGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.CollectionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CollectionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CollectionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CollectionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CollectionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CollectionFindUniqueArgs, TData = Prisma.CollectionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CollectionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CollectionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CollectionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CollectionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CollectionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CollectionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CollectionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CollectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CollectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CollectionGetPayload<T>, Context>) => Promise<Prisma.CollectionGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.CollectionCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CollectionCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.CollectionCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CollectionCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CollectionCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.CollectionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CollectionCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CollectionCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
