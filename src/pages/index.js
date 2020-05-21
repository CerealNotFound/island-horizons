import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <h2>Welcome to Unchartia!</h2>
      <p>
        <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default Home
