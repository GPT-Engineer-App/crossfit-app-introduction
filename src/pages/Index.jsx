import { Container, Heading, Text, VStack, Box, Button, SimpleGrid, Image, Link } from "@chakra-ui/react";
import { FaDownload, FaSignInAlt, FaUserPlus, FaVideo, FaBook, FaComments, FaRunning, FaCalendarAlt, FaHeadset } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={10}>
        {/* 홈페이지 소개 */}
        <Box textAlign="center">
          <Heading mb={4}>크로스핏 앱</Heading>
          <Text fontSize="xl">크로스핏 트레이닝을 위한 최고의 동반자. 개인 맞춤형 트레이닝과 커뮤니티 기능을 통해 목표 달성을 지원합니다.</Text>
        </Box>

        {/* 기능 소개 */}
        <Box>
          <Heading mb={4}>주요 기능</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            <FeatureCard icon={FaUserPlus} title="회원 가입 및 로그인" description="간편한 가입 절차를 통해 사용자 계정을 생성하고 로그인하세요." />
            <FeatureCard icon={FaRunning} title="트레이닝 프로그램" description="다양한 크로스핏 루틴과 운동 방법을 탐색하세요." />
            <FeatureCard icon={FaVideo} title="비디오 자료" description="운동 기술과 팁을 제공하는 비디오 자료를 시청하세요." />
            <FeatureCard icon={FaComments} title="커뮤니티 및 포럼" description="다른 사용자들과 소통하고 정보를 공유하세요." />
            <FeatureCard icon={FaCalendarAlt} title="이벤트 및 대회" description="크로스핏 관련 이벤트와 대회 정보를 확인하세요." />
            <FeatureCard icon={FaBook} title="자료 다운로드" description="추가 운동 자료와 트레이닝 플랜을 다운로드하세요." />
            <FeatureCard icon={FaHeadset} title="고객 지원" description="문의사항이나 문제를 해결할 수 있는 지원을 받으세요." />
          </SimpleGrid>
        </Box>

        {/* 앱 다운로드 링크 */}
        <Box textAlign="center">
          <Heading mb={4}>앱 다운로드</Heading>
          <Button leftIcon={<FaDownload />} colorScheme="teal" size="lg">
            <Link href="https://example.com/download" isExternal>
              앱 다운로드하기
            </Link>
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  const IconComponent = icon;
  return (
    <VStack bg="gray.100" p={5} borderRadius="md" boxShadow="md">
      <IconComponent size="3em" />
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

export default Index;
