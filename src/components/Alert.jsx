import { useRef } from 'react';
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure
} from '@chakra-ui/react'

export default function Alert({
  isOpen=false,
  title='Alerta', 
  description='¿Desea confirmar esta acción?', 
  confirmBtnLabel='Confimar', 
  cancelBtnLabel='Cancelar',
  onConfirm, 
  onCancel
}) {

    const cancelRef = useRef()
  
    // console.log('Alert', isOpen);

    return (
      <>
       <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                {title}
              </AlertDialogHeader>
  
              <AlertDialogBody>
                {description}
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onCancel}>
                  {cancelBtnLabel}
                </Button>
                <Button colorScheme='red' onClick={onConfirm} ml={3}>
                  {confirmBtnLabel}
                </Button>
              </AlertDialogFooter>
              
            </AlertDialogContent>
          </AlertDialogOverlay>

        </AlertDialog>
      </>
    )
}
