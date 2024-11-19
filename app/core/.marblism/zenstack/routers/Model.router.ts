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

        createMany: procedure.input($Schema.ModelInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).model.createMany(input as any))),

        create: procedure.input($Schema.ModelInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).model.create(input as any))),

        deleteMany: procedure.input($Schema.ModelInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).model.deleteMany(input as any))),

        delete: procedure.input($Schema.ModelInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).model.delete(input as any))),

        findFirst: procedure.input($Schema.ModelInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).model.findFirst(input as any))),

        findMany: procedure.input($Schema.ModelInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).model.findMany(input as any))),

        findUnique: procedure.input($Schema.ModelInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).model.findUnique(input as any))),

        updateMany: procedure.input($Schema.ModelInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).model.updateMany(input as any))),

        update: procedure.input($Schema.ModelInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).model.update(input as any))),

        count: procedure.input($Schema.ModelInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).model.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ModelCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModelCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModelCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModelCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ModelCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModelCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ModelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ModelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModelCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModelCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ModelGetPayload<T>, Context>) => Promise<Prisma.ModelGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ModelDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModelDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModelDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModelDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ModelDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModelDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ModelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ModelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModelDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModelDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ModelGetPayload<T>, Context>) => Promise<Prisma.ModelGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ModelFindFirstArgs, TData = Prisma.ModelGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ModelFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ModelGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ModelFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ModelFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ModelGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ModelGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ModelFindManyArgs, TData = Array<Prisma.ModelGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ModelFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ModelGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ModelFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ModelFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ModelGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ModelGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ModelFindUniqueArgs, TData = Prisma.ModelGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ModelFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ModelGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ModelFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ModelFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ModelGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ModelGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ModelUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModelUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModelUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModelUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ModelUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ModelUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ModelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ModelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ModelUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ModelUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ModelGetPayload<T>, Context>) => Promise<Prisma.ModelGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ModelCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ModelCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ModelCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ModelCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ModelCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ModelCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ModelCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ModelCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
