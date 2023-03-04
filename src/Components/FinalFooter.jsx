import {
    Box,
    Container,
    Stack,
    Text,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    Image,
    HStack,
    Grid,
  } from "@chakra-ui/react";
  import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function FinalFooter() {
    return (
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"7xl"} py={10} m={'auto'} border={'0px solid black'}>
          <Grid
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            border={'0px solid red'}
            gap={'50px'}
            justifyContent={'space-evenly'}
            fontSize={[15, 15, 15, 15]}
          >
            <Stack align={"flex-start"} boxShadow={'sm'} textAlign={'left'} border={'0px solid black'}>
              <Text fontWeight={'bold'} fontSize={15} noOfLines={1}>ONLINE SHOPPING</Text>
              <Text noOfLines={1}>Men</Text>
              <Text noOfLines={1}>Women</Text>
              <Text noOfLines={1}>Kids</Text>
              <Text noOfLines={1}>Beauty</Text>
              <Text noOfLines={1}>Gift card</Text>
              <Text noOfLines={1}>Classic World Insider</Text>
              <Text noOfLines={1}>About Us</Text>
              <Text noOfLines={1}>Blog</Text>
              <Text noOfLines={1}>Careers</Text>
              <Text noOfLines={1}>Contact Us</Text>
            </Stack>
  
            <Stack align={"flex-start"} boxShadow={'sm'}textAlign={'left'} border={'0px solid black'}>
              <Text fontWeight={'bold'} fontSize={15} noOfLines={1}>USEFUL LINKS</Text>
              <Text noOfLines={1}>Blog</Text>
              <Text noOfLines={1}>Careers</Text>
              <Text noOfLines={1}>Site Map</Text>
              <Text noOfLines={1}>Corporate Information</Text>
              <Text noOfLines={1}>Whitehat</Text>
              <Text noOfLines={1}>Help Center</Text>
              <Text noOfLines={1}>Safety Center</Text>
              <Text noOfLines={1}>Community Guidelines</Text>
              <Text noOfLines={1}>Safety Center</Text>
              <Text noOfLines={1}>Community Guidelines</Text>
            </Stack>
  
            <Stack align={"flex-start"}boxShadow={'sm'} textAlign={'left'} border={'0px solid black'}>
              <Text fontWeight={'bold'} fontSize={15} noOfLines={1}>CUSTOMER POLICIES</Text>
              <Text noOfLines={1}>Contact Us</Text>
              <Text noOfLines={1}>FAQ</Text>
              <Text noOfLines={1}>T&C</Text>
              <Text noOfLines={1}>Terms Of Use</Text>
              <Text noOfLines={1}>Track Orders</Text>
              <Text noOfLines={1}>Shipping</Text>
              <Text noOfLines={1}>Cancellation</Text>
              <Text noOfLines={1}>Return</Text>
              <Text noOfLines={1}>Privacy Policy</Text>
              <Text noOfLines={1}>Grievance Officer</Text>
            </Stack>
  
            <Stack alignItems={"flex-start"} boxShadow={'sm'}textAlign={'left'}border={'0px solid black'}  >
              <Text fontWeight={'bold'} fontSize={15} noOfLines={1}>REGISTER OFFICE ADDRESS</Text>
              <Text noOfLines={1}>Jalandhar, Punjab</Text>
              <Text noOfLines={1}>Hoshiarpur, Punjab</Text>
              <Text noOfLines={1}>Durgapur, West Bengal</Text>
              <Text noOfLines={1}>Asansol, West Bengal</Text>
              <Text noOfLines={1}>Kolkata, West Bengal</Text>
              <Text noOfLines={1}>Bengaluru, Karnataka</Text>
              <Text noOfLines={1}>New Delhi, India</Text>
              <Text noOfLines={1}>Telephone: +91-999999999</Text>
            </Stack>
  
            <Stack align={"flex-start"}>
              <Text fontWeight={'bold'} fontSize={15} noOfLines={1}>EXPERIENCE MYNTRA ON</Text>
  
              <Image
                src="https://www.pngmart.com/files/10/Get-It-On-Google-Play-Transparent-Background.png"
                alt="playStore"
                width={["40%", "40%", "60%", "80%"]}
              />
              <Image
                src="https://w7.pngwing.com/pngs/327/888/png-transparent-aivalable-on-the-app-store-hd-logo.png"
                alt="applestore"
                width={["40%", "40%", "60%", "80%"]}
              />
            </Stack>
  
            <Stack align={"flex-start"}>
              <HStack>
                <Image
                  src="https://previews.123rf.com/images/arcady31/arcady311304/arcady31130400034/19245976-original-stamp.jpg"
                  alt="playStore"
                  width={["26%", "26%", "38%", "45%"]}
                />
  
                <Image
                  src="https://ocxooscillator.com/wp-content/uploads/2020/06/30days_Return_OcxoOscillator-1.png"
                  alt="applestore"
                  width={["26%", "26%", "38%", "45%"]}
                />
              </HStack>
            </Stack>
          </Grid>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            // direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }
  