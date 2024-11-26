import { gql } from "@apollo/client";

export const CREATE_WORKSPACE = gql`
    mutation CreateWorkspace($name: String!, $description: String, $userId : ID!){
        createWorkspace(name : $name , description : $description, userId : $userId){
            id
            name
            description
            userId
        }
    }

`
