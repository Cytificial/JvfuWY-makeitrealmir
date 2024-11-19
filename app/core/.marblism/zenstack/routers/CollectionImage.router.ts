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

        createMany: procedure.input($Schema.CollectionImageInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collectionImage.createMany(input as any))),

        create: procedure.input($Schema.CollectionImageInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collectionImage.create(input as any))),

        deleteMany: procedure.input($Schema.CollectionImageInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collectionImage.deleteMany(input as any))),

        delete: procedure.input($Schema.CollectionImageInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collectionImage.delete(input as any))),

        findFirst: procedure.input($Schema.CollectionImageInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).collectionImage.findFirst(input as any))),

        findMany: procedure.input($Schema.CollectionImageInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).collectionImage.findMany(input as any))),

        findUnique: procedure.input($Schema.CollectionImageInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).collectionImage.findUnique(input as any))),

        updateMany: procedure.input($Schema.CollectionImageInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collectionImage.updateMany(input as any))),

        update: procedure.input($Schema.CollectionImageInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collectionImage.update(input as any))),

        count: procedure.input($Schema.CollectionImageInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).collectionImage.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CollectionImageCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionImageCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionImageCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionImageCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CollectionImageCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionImageCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CollectionImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CollectionImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionImageCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionImageCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CollectionImageGetPayload<T>, Context>) => Promise<Prisma.CollectionImageGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CollectionImageDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionImageDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionImageDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionImageDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CollectionImageDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionImageDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CollectionImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CollectionImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionImageDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionImageDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CollectionImageGetPayload<T>, Context>) => Promise<Prisma.CollectionImageGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CollectionImageFindFirstArgs, TData = Prisma.CollectionImageGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CollectionImageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CollectionImageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionImageFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CollectionImageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CollectionImageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CollectionImageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CollectionImageFindManyArgs, TData = Array<Prisma.CollectionImageGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.CollectionImageFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CollectionImageGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionImageFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CollectionImageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CollectionImageGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CollectionImageGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CollectionImageFindUniqueArgs, TData = Prisma.CollectionImageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CollectionImageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CollectionImageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionImageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CollectionImageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CollectionImageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CollectionImageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CollectionImageUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionImageUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionImageUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionImageUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CollectionImageUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionImageUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CollectionImageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CollectionImageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionImageUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionImageUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CollectionImageGetPayload<T>, Context>) => Promise<Prisma.CollectionImageGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.CollectionImageCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CollectionImageCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.CollectionImageCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CollectionImageCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CollectionImageCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.CollectionImageCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CollectionImageCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CollectionImageCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
