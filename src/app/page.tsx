"use client";
import { Container, Text, Title, Rating, Textarea, Button, Divider, Pagination,Group, Center } from "@mantine/core";
import { useState } from 'react';

//const [activePage, setPage] = useState(1);


export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt = "sm"> Your rating </Title>
      <Rating defaultValue={0} size="lg" />
 
      <Textarea
        fz ="12" mt = "sm"
        rows={3}
        label = "Your review"
        //description="Input description"
        placeholder = "Do you enjoy eating?"
      />

      <Button variant="filled" color="orange" mt = "sm"> Submit Review </Button>
  
      <Divider my="md" />
      <Group justify="center">
      <Title order={4}> Elon Musk </Title>
      <Rating defaultValue={5} size="sm" />
      </Group>
      <Text c="dimmed" fz ="15" ta= "center">Best pizza in this world. l give you X score. </Text>
      
      <Divider my="md" />

      <Group justify="center">
      <Title order={4}> Mark Zuck </Title>
      <Rating defaultValue={4} size="sm" />
      </Group>
      <Text c="dimmed" fz ="15" ta= "center">My favourite part is pepperoni </Text>

      <Group justify="center">
      <Pagination color="orange" mt = "sm" boundaries ={1} total={20} />
      </Group>

      <Text ta="center" fz ="15" c ="dimmed" mt = "sm" >
        Copyright © 2024 Yosita Satiman 660610788
      </Text>
    </Container>
  );
}
