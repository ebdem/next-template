import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  Select,
  Slider,
  Switch,
  Menu
} from 'antd'
import type { DatePickerProps,MenuProps } from 'antd'


import { SmileFilled } from '@ant-design/icons'
import Link from 'next/link'
import { GetStaticProps } from 'next/types'
import Head from 'next/head'

const FormItem = Form.Item

const content = {
  marginTop: '100px',
}

export default function Home({data}: any) {
  console.log(data,"data")
  const onDatePickerChange: DatePickerProps['onChange'] = (
    date,
    dateString
  ) => {
    console.log(date, dateString, "ebu")
  }

  return (
    <>
   <Head>
  <title>{data.result.categories[0].name}</title>
  <meta name="description" content="Come to my store for great apparel!" />
  <meta property="og:title" content="My Clothing Store" />
  <meta property="og:description" content="Come to my store for great apparel!" />
  <meta property="og:url" content="https://myclothingstore.com/" />
  <meta property="og:type" content="website" />
  <link rel="icon" href="/favicon.ico" />
</Head>

    <div style={content}>
      <div className="text-center mb-5">
        <Link href="#" className="logo mr-0">
          <SmileFilled style={{ fontSize: 48 }} />
        </Link>

        <p className="mb-0 mt-3 text-disabled">Welcome to the world !</p>
      </div>
      <div>
        <Form
          layout="horizontal"
          size={'large'}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          {/* <FormItem label="Input Number">
            <InputNumber
              min={1}
              max={10}
              style={{ width: 100 }}
              defaultValue={3}
              name="inputNumber"
            />
          </FormItem> */}

          {/* <FormItem label="Switch">
            <Switch defaultChecked />
          </FormItem> */}

          {/* <FormItem label="Slider">
            <Slider defaultValue={70} />
          </FormItem> */}
          <FormItem label="Menu">
          <Menu mode="horizontal" items={data.result.categories.map((item:any)=>{return {label:<Link href={item.url}>{item.name}</Link>,key:item.name}})} />
          </FormItem>

          <FormItem label="Select">
            <Select
              defaultValue="lucy"
              style={{ width: 192 }}
              options={data.result.categories.map((item:any)=>{return {label:item.name,value:item.name}})}
            />
          </FormItem>

          {/* <FormItem label="DatePicker">
            <DatePicker showTime onChange={onDatePickerChange} />
          </FormItem> */}
          {/* <FormItem style={{ marginTop: 48 }} wrapperCol={{ offset: 8 }}>
            <Button type="primary" htmlType="submit">
              OK
            </Button>
            <Button style={{ marginLeft: 8 }}>Cancel</Button>
          </FormItem> */}
        </Form>
      </div>
    </div>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://project-website-api-dev.kentkartlabs.com/category/list`,{
    headers: {
      agency_id:"63e1556d205d7447538edd56"
    }
  })
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
