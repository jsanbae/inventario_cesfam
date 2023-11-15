import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { LIST_ITEMS } from './graphql-query';
import { ADD_ITEM_MUTATION, UPDATE_ITEM_MUTATION, DELETE_ITEM_MUTATION } from './graphql-mutation';

export const useListItems = () => {
// export const useListItems = (pattern = "", options = {} ) => {
    // const limit = options.limit ?? 10;
    // const skip = options.skip ?? 0;
    // const sort_field = options.sort_field ?? "name";
    // const sort_order = options.sort_order ?? "asc";
    
    // const result = useQuery(LIST_ITEMS, {variables: {pattern: pattern, limit: limit, skip: skip, sort_field: sort_field, sort_order: sort_order}});
    // return result;

    return useLazyQuery(LIST_ITEMS);
}

export const useAddItem = (formValues) => {
    const result = useMutation(ADD_ITEM_MUTATION, {
        update(cache, { data: { addItem:itemData } }) {
        // console.log(itemData);

        },
        onError(err) {
            // setErrors(err.graphQLErrors);
        },
        variables: {itemInput: formValues},
        refetchQueries: [{ query : LIST_ITEMS }]
    });

    return result;
}

export const useUpdateItem = (formValues) => {
    const result = useMutation(UPDATE_ITEM_MUTATION, {
        update(cache, { data: { updateItem: itemData } }) {
        },
        onError(err) {
            // setErrors(err.graphQLErrors);
        },
        variables: {itemInput: formValues},
        refetchQueries: [{ query : LIST_ITEMS }]
    });

    return result;
}

export const useDeleteItem = (itemID) => {
    const result = useMutation(DELETE_ITEM_MUTATION, {
        update(cache, { data: { deleteItem: itemData } }) {
            // toast.success(`Insumo ${itemData.name} ha sido eliminado`);
        },
        onError(err) {
            // setErrors(err.graphQLErrors);
        },
        variables: {id: itemID},
        refetchQueries: [{ query : LIST_ITEMS }]
    });

    return result;
}