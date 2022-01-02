import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CategoryItems } from './DropdownList.js';
  
// Dropdown categories  
const categories = ["all", "recipe", "video", "article"];  
  
export const RecipeDropDownList = () => {  

 return (
    
     <DropdownButton
      alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right">
        {CategoryItems.map((categoty, index) => (
          <Dropdown.Item>{categoty.name}</Dropdown.Item>
        ))}
    </DropdownButton>
  );
};