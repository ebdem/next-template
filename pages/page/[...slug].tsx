import { Card } from 'antd';
import React from 'react';

export async function getServerSideProps(context: any) {
   // Use `context.params` to get dynamic params
   const { slug } = context.params;
    //console.log(context,"context")
    const res = await fetch(`https://project-website-api-dev.kentkartlabs.com/kentkart/${slug}`,{

    headers: {
        agency_id:"63e1556d205d7447538edd56"
    }
    }); // Using `restcountries.com` as `restcountries.eu` is no longer accessible
    const data = await res.json();
   
    return { props: { data } };
}

function Page(props: any) {
    console.log(props,"props")
  return (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
    <p>{props.data.result.page.name}</p>
    <p>{props.data.result.page.name}</p>
    <p>{props.data.result.page.name}</p>
  </Card>
   
  )
}

export default Page