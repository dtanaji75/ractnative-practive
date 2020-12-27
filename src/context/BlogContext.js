import React, { Children } from 'react';

const BlogContext =React.createContext();

export const BlogProvider=({Children})=>{
    return(
    <BlogContext.Provider>
        {Children}
    </BlogContext.Provider>
    );
}