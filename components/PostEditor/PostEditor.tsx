import {Paper, Avatar, Group, Stack, Text} from '@mantine/core'
import classes from './PostEditor.module.css'

export const PostEditor = () => {
  return (
    <Paper shadow="xs" radius="md" p="md">
      <div className={classes.wrap}>
        <Avatar size="md" />
        <Stack>
          <Group gap="sm">
            <Text className={classes.text}>Akihiro Kato</Text>
            <Text className={classes.text} c="dark.2">@croe_c</Text>
            <Text className={classes.text} c="dark.2">2時間前</Text>
          </Group>
          <Text className={classes.text} size="lg">何が一番無駄だったかっていうと、文句を言おうとして、この状況を示すようなことわざを探して結局見つからなかったこの時間だよ。10分くらい溶かしたわ</Text>
        </Stack>
      </div>
    </Paper>
  )
}
