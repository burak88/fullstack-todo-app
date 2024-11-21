"use client"

import { GET_POSTS } from '@/graphql/queries';
import { useApolloClient } from '@apollo/client';
import React from 'react'

export default function ListPage() {
  const client = useApolloClient();

  // Cache'ten veri okuma
  const cachedData = client.readQuery({ query: GET_POSTS });
  console.log(cachedData)
  return (
    <div>ListPage</div>
  )
}
