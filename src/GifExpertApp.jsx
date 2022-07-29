import { useState } from 'react'
// import { AddCategory } from './components/AddCategory'
// import { GifGrid } from './components/GifGrid';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Metal Gear'])
    // console.log(categories)

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory) ) return;

        setCategories([...categories, newCategory])
        
        
        // setCategories([...categories, newCategory])

    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={onAddCategory}
                currentCategories = {categories}
            />
            { categories.map((cat) => 
                    <GifGrid 
                        key={cat} 
                        category={cat}
                    />
                )
            }
            

        </>
    )
};