import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from "react-router-dom"
import { toast } from 'react-toastify';
import { ColorRing } from  'react-loader-spinner'
import { useOffCanvasContext, useOffCanvasToggleContext } from "src/context/OffCanvasContext";
import { useListItems, useDeleteItem } from 'src/Item/custom-hooks';
import useConfirm from 'src/hooks/useConfirm';
import Item from 'src/Item/components/Item';
import randomID from 'src/utils/randomID';

function ListItems({ setDataLength }) {
    const [queryParameters] = useSearchParams()
    const pattern = queryParameters.get("item") ?? "";
    const options = {
        limit : parseInt(queryParameters.get("limit")) ?? 10,
        skip: parseInt(queryParameters.get("skip")) ?? 0,
        sort_field: queryParameters.get("sort_field") ?? "name",
        sort_order: queryParameters.get("sort_order") ?? "asc",
    };

    const [itemId, setItemId] = useState(null);
    const [errors, setErrors] = useState([]);
    const [loadingItems, setLoadingItems] = useState(true);
    const [errorItems, setErrorItems] = useState(false);
    const [itemsList, setItemsList] = useState([]);
    
    const confirm = useConfirm();
    const [getItems, result] = useListItems();

    const isOpen = useOffCanvasContext();
    const toggleOffCanvas = useOffCanvasToggleContext();
    
    const [ deleteItem, {isloading} ] = useDeleteItem(itemId, setErrors);

    useEffect(() => {
        console.log('load component');
        loadItems();
    }, []);

    useEffect(() => {
        console.log('cambio el resultado');
        console.log(result);    
        setLoadingItems(result.loading);
        setErrorItems(result.error);
        if (result.data) {
            setItemsList(result.data.Items);
        }
    }, [result]);

    useEffect(() => {
        if (loadingItems) console.log('rendering list items');
        if (!loadingItems) console.log('rendered list items');
    }, [loadingItems]);
    
    useEffect(() => {
        setDataLength(0);
        setDataLength(itemsList.length);
        if (isOpen) toggleOffCanvas();
    }, [itemsList]);

    const loadItems = () => {
        getItems({variables: {pattern: pattern, ...options}});
    }
    
    const handleDelete = useCallback(async (event) => {
        const { insumo: itemName, id: id } = event.currentTarget.dataset;
        setItemId(id);
        const confirmDelete = await confirm({title:'Eliminar Insumo', description: `¿Estas seguro de eliminar el insumo ${itemName}?`});
        
        if (confirmDelete) {
            deleteItem().then((data) => {
                console.log(data.data.deleteItem);
                toast.success(`Insumo ${data.data.deleteItem.name} ha sido eliminado`);
                setItemId(null);
            });
        }

    }, [itemId]);

    if (loadingItems) return (
        <div className="p-8 mb-4 flex gap-8 w-full justify-center">
            <ColorRing
                height = "80"
                width = "80"
                radius = "9"
                color = 'green'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#784f91', '#e7b63a', '#93bb4d', '#d54062', '#4b8dcf']}
            />
        </div>
    );

    if (errorItems) return <div className="p-8 mb-4 flex gap-8 w-full justify-center">Oh no un error ha ocurrido... {errorItems.message}</div>;

    return (
        <>       
        {
            itemsList.map((insumo, index) => <Item key={randomID()} insumo={insumo} confirmDelete={handleDelete} />)
        }
        </>
    );
  }
  
  export default ListItems;