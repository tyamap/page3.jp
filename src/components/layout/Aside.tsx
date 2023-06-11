import { Text, Aside as MantineAside, Title, AspectRatio, Avatar, SpacingValue, SystemProp } from "@mantine/core"

interface AsideProps {
  w: SystemProp<SpacingValue>
}
const Aside = (props: AsideProps) => {
  return (
    <MantineAside height="auto" w={props.w} p="lg" withBorder={false} sx={{ borderRight: '1px solid #e9ecef' }}>
      <MantineAside.Section>
        <AspectRatio ratio={1} w="100%" mx="auto" maw={360}>
          <Avatar radius="100%" size="100%" />
        </AspectRatio>
      </MantineAside.Section>
      <MantineAside.Section>
        <Title order={2}>ID</Title>
        <Text c="dimmed">Name</Text>
      </MantineAside.Section>
      <MantineAside.Section>
        <Text>Description</Text>
      </MantineAside.Section>
    </MantineAside>
  );
};

export default Aside;