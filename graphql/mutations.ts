import { gql } from "@apollo/client";

export const ADD_POST = gql`
	mutation AddPost($content: String, $title: String , $published : Boolean) {
		addPost(content: $content, title: $title, $published : published) {
			id
			content
			title
			published
		}
	}
`;
