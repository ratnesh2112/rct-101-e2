import React from "react";

import { useState } from "react";

import styles from "./addpro.module.css";


import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Select,
  Radio,
  RadioGroup,
  Text
} from '@chakra-ui/react'

const AddProduct = ({ addProduct }) => {

  const [newProduct, setNewProduct] = useState("")

  const handleaddProduct = () =>{
    addProduct(newProduct);
  }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <div >
        <Button onClick={onOpen} className={styles.addnew}>Add New Product</Button>
        <div>
        <Modal  isOpen={isOpen} onClose={onClose} >
            <ModalHeader>Add New Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} className={styles.form}>
              <label htmlFor="">Title</label>
              <Input data-cy="add-product-title" placeholder="Title"/>
              <label>Category</label>
              <Select data-cy="add-product-category" placeholder="Category">
                <option data-cy="add-product-category-shirt" value='shirt'>Shirt</option>
                <option data-cy="add-product-category-pant" value='pant'>Pant</option>
                <option data-cy="add-product-category-jeans" value='jeans'>Jeans</option>
              </Select>
              <label htmlFor="">Gender</label>
              <RadioGroup data-cy="add-product-gender">
                <Radio data-cy="add-product-gender-male">Male</Radio>
                <Radio data-cy="add-product-gender-female">Female</Radio>
                <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
              </RadioGroup>
              <label htmlFor="">Price</label>
              <Input data-cy="add-product-price" placeholder="Price"/>
              <Button data-cy="add-product-submit-button" backgroundColor='teal'color='white' onClick={handleaddProduct} padding='15px' className={styles}>Create</Button>
            </ModalBody>
        </Modal>
        </div>
        
      </div>
    )
  
};

export default AddProduct;



// function BasicUsage() {
//   const { isOpen, onOpen, onClose } = useDisclosure()

//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>

//       <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text fontWeight='bold' mb='1rem'>
//               You can scroll the content behind the modal
//             </Text>
            
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme='blue' mr={3} onClick={onClose}>
//               Close
//             </Button>
//             <Button variant='ghost'>Secondary Action</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }

// export default BasicUsage
