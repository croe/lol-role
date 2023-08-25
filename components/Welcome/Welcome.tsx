'use client'

import { Text, TextInput, Button, Badge, Grid } from '@mantine/core'
import classes from './Welcome.module.css'
import { useRef } from 'react'

const num = [0, 1, 2, 3, 4]
const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const arrayShuffle = (array) => {
  for(let i = array.length - 1; 0 < i; i--) {
    const r = Math.floor(Math.random() * (i + 1))
    const tmp = array[i]
    array[i] = array[r]
    array[r] = tmp
  }
  return array
}

export const Welcome = () => {
  const n1ref = useRef(null)
  const n2ref = useRef(null)
  const n3ref = useRef(null)
  const n4ref = useRef(null)
  const n5ref = useRef(null)

  const handleSubmit = async () => {
    for(let i = 0; i < 10; i++) {
      const temp1 = n1ref.current.value
      const temp2 = n2ref.current.value
      const temp3 = n3ref.current.value
      const temp4 = n4ref.current.value
      const temp5 = n5ref.current.value
      const array = [temp1, temp2, temp3, temp4, temp5]
      // const result = arrayShuffle(role)
      const result = arrayShuffle(num)
      // console.log(result)
      // console.log(result)
      n1ref.current.value = result[0] !== undefined && array[result[0]]
      n2ref.current.value = result[1] !== undefined && array[result[1]]
      n3ref.current.value = result[2] !== undefined && array[result[2]]
      n4ref.current.value = result[3] !== undefined && array[result[3]]
      n5ref.current.value = result[4] !== undefined && array[result[4]]
      await _sleep(50)
    }
  }
  return (
    <>
      <div className={classes.title_wrap}>
        <Text className={classes.title} ta="center" variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
          LoL Random Role
        </Text>
        <div className={classes.names}>
          <Grid>
            <Grid.Col span={5} className={classes.role}>
              <Badge color="red" size="lg">TOP</Badge>
            </Grid.Col>
            <Grid.Col span={7}>
              <TextInput placeholder="name" ref={n1ref} />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={5} className={classes.role}>
              <Badge color="yellow" size="lg">JUNGLE</Badge>
            </Grid.Col>
            <Grid.Col span={7}>
              <TextInput placeholder="name" ref={n2ref} />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={5} className={classes.role}>
              <Badge color="indigo" size="lg">MID</Badge>
            </Grid.Col>
            <Grid.Col span={7}>
              <TextInput placeholder="name" ref={n3ref} />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={5} className={classes.role}>
              <Badge color="green" size="lg">BOTTOM</Badge>
            </Grid.Col>
            <Grid.Col span={7}>
              <TextInput placeholder="name" ref={n4ref} />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={5} className={classes.role}>
              <Badge color="grape" size="lg">SUPPORT</Badge>
            </Grid.Col>
            <Grid.Col span={7}>
              <TextInput placeholder="name" ref={n5ref} />
            </Grid.Col>
          </Grid>
        </div>
        <div className={classes.button}>
          <Button color="red" onClick={handleSubmit}>Role!</Button>
        </div>
      </div>
    </>
  )
}
