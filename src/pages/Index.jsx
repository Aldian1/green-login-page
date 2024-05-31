import { Box, Flex, Image, Text, Input, Button, Link } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="#F3FFF3" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" p="40px" w="80%" maxW="1200px">
        {/* Left Section */}
        <Box p="40px" textAlign="center">
          <Image src="/path/to/illustration.png" alt="Illustration" boxSize="300px" mx="auto" mb="20px" />
          <Text fontSize="24px" fontWeight="bold" color="#333333" mb="20px">Welcome Back!</Text>
          <Text fontSize="16px" color="#666666">Please login to your account</Text>
        </Box>

        {/* Right Section */}
        <Box w={{ base: "100%", md: "400px" }} p="40px" bg="#FFFFFF" borderRadius="8px" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)">
          <Box mb="20px">
            <Text fontSize="16px" color="#333333" mb="5px">Username or email</Text>
            <Input type="text" placeholder="Enter your username or email" h="50px" p="10px" fontSize="16px" border="1px solid #CCCCCC" borderRadius="4px" />
          </Box>
          <Box mb="20px">
            <Text fontSize="16px" color="#333333" mb="5px">Password</Text>
            <Input type="password" placeholder="Enter your password" h="50px" p="10px" fontSize="16px" border="1px solid #CCCCCC" borderRadius="4px" />
          </Box>
          <Button w="100%" h="50px" bg="#333333" color="#FFFFFF" fontSize="16px" fontWeight="bold" borderRadius="4px" mb="20px" _hover={{ cursor: "pointer" }}>
            Sign In
          </Button>
          <Link fontSize="14px" color="#666666" textDecoration="none" _hover={{ textDecoration: "underline", cursor: "pointer" }} mb="20px" display="block">
            Forgot password?
          </Link>
          <Button w="100%" h="50px" bg="#FFFFFF" border="1px solid #DDDDDD" fontSize="16px" fontWeight="bold" color="#333333" borderRadius="4px" mb="20px" _hover={{ cursor: "pointer" }} leftIcon={<FaGoogle />}>
            Sign in with Google
          </Button>
          <Link fontSize="14px" color="#00AA00" textDecoration="none" _hover={{ textDecoration: "underline", cursor: "pointer" }} display="block" textAlign="center">
            Are you new? Create an Account
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;