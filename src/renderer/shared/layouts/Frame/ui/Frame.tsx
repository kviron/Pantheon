import { APP_NAME, APP_VERSION } from '@/shared/const/app';
import { Container, Text, Flex } from '@mantine/core';

export const Frame = () => {
  return (
    <Container fluid>
      <Flex align="center" gap="sm" h="var(--frame-height)">
        <Text size="sm" fw={700}>
          {APP_NAME}
        </Text>
        <Text size="sm">{APP_VERSION}</Text>
      </Flex>
    </Container>
  );
};
