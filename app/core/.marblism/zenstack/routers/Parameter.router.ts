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

        createMany: procedure.input($Schema.ParameterInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parameter.createMany(input as any))),

        create: procedure.input($Schema.ParameterInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parameter.create(input as any))),

        deleteMany: procedure.input($Schema.ParameterInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parameter.deleteMany(input as any))),

        delete: procedure.input($Schema.ParameterInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parameter.delete(input as any))),

        findFirst: procedure.input($Schema.ParameterInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).parameter.findFirst(input as any))),

        findMany: procedure.input($Schema.ParameterInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).parameter.findMany(input as any))),

        findUnique: procedure.input($Schema.ParameterInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).parameter.findUnique(input as any))),

        updateMany: procedure.input($Schema.ParameterInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parameter.updateMany(input as any))),

        update: procedure.input($Schema.ParameterInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).parameter.update(input as any))),

        count: procedure.input($Schema.ParameterInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).parameter.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ParameterCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParameterCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParameterCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParameterCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ParameterCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParameterCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ParameterGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ParameterGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParameterCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParameterCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ParameterGetPayload<T>, Context>) => Promise<Prisma.ParameterGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ParameterDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParameterDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParameterDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParameterDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ParameterDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParameterDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ParameterGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ParameterGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParameterDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParameterDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ParameterGetPayload<T>, Context>) => Promise<Prisma.ParameterGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ParameterFindFirstArgs, TData = Prisma.ParameterGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ParameterFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ParameterGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ParameterFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ParameterFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ParameterGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ParameterGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ParameterFindManyArgs, TData = Array<Prisma.ParameterGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ParameterFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ParameterGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ParameterFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ParameterFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ParameterGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ParameterGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ParameterFindUniqueArgs, TData = Prisma.ParameterGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ParameterFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ParameterGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ParameterFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ParameterFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ParameterGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ParameterGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ParameterUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParameterUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParameterUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParameterUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ParameterUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParameterUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ParameterGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ParameterGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParameterUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParameterUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ParameterGetPayload<T>, Context>) => Promise<Prisma.ParameterGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ParameterCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ParameterCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ParameterCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ParameterCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ParameterCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ParameterCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ParameterCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ParameterCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
