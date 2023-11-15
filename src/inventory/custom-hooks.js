import { useQuery, useMutation } from '@apollo/react-hooks';
import { LIST_INVENTORY_MOVEMENTS } from './graphql-query';
import { ADD_INVENTORY_REGISTRY_MUTATION, UPDATE_INVENTORY_REGISTRY_MUTATION, DELETE_INVENTORY_REGISTRY_MUTATION } from './graphql-mutation';

export const useListInventoryMovements = () => {
    const result = useQuery(LIST_INVENTORY_MOVEMENTS);
    return result;
}

export const useAddRegistry = (formValues) => {
    const result = useMutation(ADD_INVENTORY_REGISTRY_MUTATION, {
        variables: {inventoryMovementInput: formValues},
        update(cache, { data: { addInventoryMovement: inventoryMovementInput } }) {
        },
        onError(err) {
            // setErrors(err.graphQLErrors);
        },
        refetchQueries: [{ query : LIST_INVENTORY_MOVEMENTS }]
    });

    return result;
}

export const useUpdateRegistry = (formValues) => {
    const result = useMutation(UPDATE_INVENTORY_REGISTRY_MUTATION, {
        variables: {inventoryMovementInput: formValues},
        update(cache, { data: { updateInventoryMovement: inventoryMovementInput } }) {
        },
        onError(err) {
            // setErrors(err.graphQLErrors);
        },
        refetchQueries: [{ query : LIST_ITEMS }]
    });

    return result;
}

export const useDeleteegistry = (itemID) => {
    const result = useMutation(DELETE_INVENTORY_REGISTRY_MUTATION, {
        variables: {id: itemID},
        update(cache, { data: { deleteInventoryMovement: itemData } }) {
            // toast.success(`Insumo ${itemData.name} ha sido eliminado`);
        },
        onError(err) {
            // setErrors(err.graphQLErrors);
        },
        refetchQueries: [{ query : LIST_ITEMS }]
    });

    return result;
}