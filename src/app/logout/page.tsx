"use client";

import Button from '@/components/Button'
import React from 'react'

export default function page() {

  function handleClick() {
    console.log("logout")
  }
  return (
    <main>
      <h1>Logout</h1>
      <Button theme="danger" action={handleClick}>Logout</Button>
    </main>
  )
}
