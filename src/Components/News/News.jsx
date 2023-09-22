import React from 'react';
import CarrotCake from '../assets/Images/Carrot_Cake.png';
import DulceDeLecheCake from '../assets/Images/Dulce_de_leche_Cake.png';
import BreadTable from '../assets/Images/Bread_table.png';
import './News.css';

const News = () => {
    return(
        <div className='container-news'>
            <div className='card-news'>
                    <img src={CarrotCake}  className='img-news'/>
                    <h4>CARROT CAKE</h4>
            </div>
            <div className='card-news'>
                    <img src={DulceDeLecheCake}  className='img-news'/>
                    <h4>DULCE DE LECHE CAKE</h4>
            </div>
            <div className='card-news'>
                    <img src={BreadTable}  className='img-news'/>
                    <h4>WHOLEMEAL SOURDOUHG</h4>
            </div>

        </div>
    )
}

export { News }