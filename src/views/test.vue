<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result } = useQuery(gql`
  query getLibraryArticles {
    getLibraryArticles(first: 10, page: 1, keyword: "") {
      paginatorInfo {
        count
        currentPage
        hasMorePages
        lastPage
        total
      }
      data {
        id
        title
        description
        content
        files {
          file_id
          file_name
          file_type
          url
        }
        content_types {
          name
        }
        category {
          name
        }
        video {
          source
          code
        }
      }
    }
  }
`);
</script>

<template>
  <h2>Hello {{ result?.user?.name ?? "world" }}</h2>
</template>
