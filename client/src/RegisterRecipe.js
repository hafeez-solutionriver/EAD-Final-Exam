//regsiter recipe by using form
import React,{useState} from 'react';
import './App.css';

export default function RegsiterRecipe(){

     const [name, setName] = useState("");
        const [description, setDescription] = useState("");
        const [ingredients, setIngredients] = useState("");
        const [thumbnail, setThumbnail] = useState("");
        const [recipes, setRecipes] = useState([]);

        <form>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" placeholder="Enter description" />
        </div>
        <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            <input type="text" className="form-control" id="ingredients" placeholder="Enter ingredients" />
        </div>
        <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input type="text" className="form-control" id="thumbnail" placeholder="Enter thumbnail" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

        </form>

}