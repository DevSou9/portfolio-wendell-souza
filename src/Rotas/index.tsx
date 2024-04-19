import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Body } from '../containers/Body'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Body />} />
  </Routes>
)

export default Rotas
