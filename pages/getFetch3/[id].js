import React from "react";
import Layout from "../../src/components/Layout";
import UserId from "./UserId";
import { useRouter } from "next/router";

export default function GetById(props) {
       const router = useRouter();
       const { id } = router.query;
       console.log(id);

       console.log(props.data);

       if (props.data) {
              return (
                     <Layout>
                            <UserId data={props.data} id={id}></UserId>
                     </Layout>
              );
       }
}

GetById.getInitialProps = async function (ctx) {
       const id = ctx.query.id;
       console.log(id);
       try {
              const response = await fetch(
                     "https://jsonplaceholder.typicode.com/posts/" + id
              );
              const data = await response.json();
              console.log(data);
              return { data: data };
       } catch (error) {
              console.log(error);
              return {};
       }
};
