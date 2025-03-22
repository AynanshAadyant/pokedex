import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TypeCard( {id} )
{
    const [TypesData, setTypesData ] =useState( );

    useEffect( () => {
        axios.get( `https://pokeapi.co/api/v2/type/${id}` )
        .then( (response) => {
            setTypesData( response.data );
            console.log( TypesData );
        })
        .catch( (error) => {
            window.alert( "Something went wrong" );
            console.log( error );
        })
    }, [] );

    return( 
        <div className="card">
            <ul> Takes Double Damage from : {
                TypesData.damage_relations.double_damage_from.map(
                    (damage, index ) => {
                        const damageId = damage.url.split('/').filter( Boolean).pop();
                        return(
                            <Link to={`/type/${damageId}`} key={index}> {damage.name} </Link>
                        )
                    }
                )
            }</ul>

            <ul> Gives Double Damage to : {
                TypesData.damage_relations.double_damage_to.map(
                    (damage,index) => {
                        const damageId = damage.url.split('/').filter( Boolean).pop();
                        return(
                            <Link to={`/type/${damageId}`} key={index}> {damage.name} </Link>
                        )
                    }
                )    
            }</ul>

            <ul> Takes Half Damage from  : {
                Types.damage_relations.half_damae_from.map(
                    (damage,index) => {
                        const damageId = damage.url.split('/').filter( Boolean).pop();
                        return(
                            <Link to={`/type/${damageId}`} key={index}> {damage.name} </Link>
                        )
                    }
                )    
            }</ul>

            <ul> Gives Half Damage To  : {
                Types.damage_relations.half_damage_to.map(
                    (damage,index) => {
                        const damageId = damage.url.split('/').filter( Boolean).pop();
                        return(
                            <Link to={`/type/${damageId}`} key={index}> {damage.name} </Link>
                        )
                    }
                )    
            }</ul>

            
        </div>
    )
}