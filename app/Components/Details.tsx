'use client'
import { VStack, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Select, Checkbox, Button, useBreakpointValue } from '@chakra-ui/react'

export default function Details() {
    const colspan = useBreakpointValue({ base: 2, md: 2, lg: 1 })
    return (
        <VStack w={"full"} h={"full"} p={10} spacing={10} align={"flex-start"}>
            <VStack spacing={3} alignItems={"flex-start"}>
                <Heading size={"2xl"} >Your Details</Heading>
                <Text>If you already have an account, click here to log in.</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w={'full'}>
                <GridItem colSpan={colspan}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder='Adil' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colspan}>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder='Nadeem' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder='Your address' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colspan}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder='New York' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colspan}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select>
                            <option value="usa">United States of America</option>
                            <option value="uae">United Arab Emirates</option>
                            <option value="nmk">North Macedonia</option>
                            <option value="de">Germany</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Checkbox defaultChecked>Ship to the billing address.</Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button variant="primary" w={'full'} size={'lg'}>Place Order</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    )
}
