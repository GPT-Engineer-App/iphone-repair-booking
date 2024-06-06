import { useState } from "react";
import { Container, VStack, HStack, Text, Select, Checkbox, CheckboxGroup, Input, Button, Radio, RadioGroup, Stack, FormControl, FormLabel, IconButton, Box } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Index = () => {
  const [step, setStep] = useState(1);
  const [model, setModel] = useState("");
  const [issues, setIssues] = useState([]);
  const [address, setAddress] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const editStep = (stepNumber) => setStep(stepNumber);

  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
      <HStack spacing={8} width="100%">
        <Box width="40%" padding={4} borderWidth={1} borderRadius="md">
          <VStack spacing={4} align="start">
            <Text fontSize="2xl">Summary</Text>
            <Box>
              <Text fontWeight="bold">iPhone Model:</Text>
              <Text>{model || "Not selected"}</Text>
              <Button size="sm" onClick={() => editStep(1)}>
                Edit
              </Button>
            </Box>
            <Box>
              <Text fontWeight="bold">Issues:</Text>
              <Text>{issues.length > 0 ? issues.join(", ") : "Not selected"}</Text>
              <Button size="sm" onClick={() => editStep(2)}>
                Edit
              </Button>
            </Box>
            <Box>
              <Text fontWeight="bold">Address:</Text>
              <Text>{address || "Not provided"}</Text>
              <Button size="sm" onClick={() => editStep(3)}>
                Edit
              </Button>
            </Box>
            <Box>
              <Text fontWeight="bold">Time Slot:</Text>
              <Text>{timeSlot || "Not selected"}</Text>
              <Button size="sm" onClick={() => editStep(4)}>
                Edit
              </Button>
            </Box>
            <Box>
              <Text fontWeight="bold">Payment Method:</Text>
              <Text>{paymentMethod || "Not selected"}</Text>
              <Button size="sm" onClick={() => editStep(5)}>
                Edit
              </Button>
            </Box>
          </VStack>
        </Box>
        <Box width="60%">
          <Text fontSize="2xl">iPhone Repair Booking</Text>
          {step === 1 && (
            <VStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Select iPhone Model</FormLabel>
                <Select placeholder="Select model" value={model} onChange={(e) => setModel(e.target.value)}>
                  <option value="iPhone 12">iPhone 12</option>
                  <option value="iPhone 12 Pro">iPhone 12 Pro</option>
                  <option value="iPhone 13">iPhone 13</option>
                  <option value="iPhone 13 Pro">iPhone 13 Pro</option>
                  <option value="iPhone 14">iPhone 14</option>
                  <option value="iPhone 14 Pro">iPhone 14 Pro</option>
                </Select>
              </FormControl>
              <HStack width="100%" justifyContent="flex-end">
                <IconButton aria-label="Next" icon={<FaArrowRight />} onClick={nextStep} />
              </HStack>
            </VStack>
          )}
          {step === 2 && (
            <VStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Select Issue(s)</FormLabel>
                <CheckboxGroup value={issues} onChange={setIssues}>
                  <Stack spacing={2}>
                    <Checkbox value="Screen Damage">Screen Damage</Checkbox>
                    <Checkbox value="Battery Issue">Battery Issue</Checkbox>
                    <Checkbox value="Water Damage">Water Damage</Checkbox>
                    <Checkbox value="Speaker Issue">Speaker Issue</Checkbox>
                    <Checkbox value="Camera Issue">Camera Issue</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </FormControl>
              <HStack width="100%" justifyContent="space-between">
                <IconButton aria-label="Previous" icon={<FaArrowLeft />} onClick={prevStep} />
                <IconButton aria-label="Next" icon={<FaArrowRight />} onClick={nextStep} />
              </HStack>
            </VStack>
          )}
          {step === 3 && (
            <VStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Enter Address</FormLabel>
                <Input placeholder="Your address" value={address} onChange={(e) => setAddress(e.target.value)} />
              </FormControl>
              <HStack width="100%" justifyContent="space-between">
                <IconButton aria-label="Previous" icon={<FaArrowLeft />} onClick={prevStep} />
                <IconButton aria-label="Next" icon={<FaArrowRight />} onClick={nextStep} />
              </HStack>
            </VStack>
          )}
          {step === 4 && (
            <VStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Select Booking Time Slot</FormLabel>
                <Select placeholder="Select time slot" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                  <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                  <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                  <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
                  <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                  <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                  <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                  <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                </Select>
              </FormControl>
              <HStack width="100%" justifyContent="space-between">
                <IconButton aria-label="Previous" icon={<FaArrowLeft />} onClick={prevStep} />
                <IconButton aria-label="Next" icon={<FaArrowRight />} onClick={nextStep} />
              </HStack>
            </VStack>
          )}
          {step === 5 && (
            <VStack spacing={4} width="100%">
              <FormControl>
                <FormLabel>Select Payment Method</FormLabel>
                <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
                  <Stack spacing={2}>
                    <Radio value="Credit Card">Credit Card</Radio>
                    <Radio value="Debit Card">Debit Card</Radio>
                    <Radio value="PayPal">PayPal</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <HStack width="100%" justifyContent="space-between">
                <IconButton aria-label="Previous" icon={<FaArrowLeft />} onClick={prevStep} />
                <Button colorScheme="blue" onClick={() => alert("Booking Confirmed!")}>
                  Confirm Booking
                </Button>
              </HStack>
            </VStack>
          )}
        </Box>
        <Box width="40%" padding={4} borderWidth={1} borderRadius="md">
          <VStack spacing={4} align="start">
            <Text fontSize="2xl">Summary</Text>
            <Box>
              <Text fontWeight="bold">iPhone Model:</Text>
              <Text>{model || "Not selected"}</Text>
              <Button size="sm" onClick={() => editStep(1)}>
                Edit
              </Button>
            </Box>
            <Box>
              <Text fontWeight="bold">Issues:</Text>
              <Text>{issues.length > 0 ? issues.join(", ") : "Not selected"}</Text>
              <Button size="sm" onClick={() => editStep(2)}>
                Edit
              </Button>
            </Box>
            <Box>
              <Text fontWeight="bold">Address:</Text>
              <Text>{address || "Not provided"}</Text>
              <Button size="sm" onClick={() => editStep(3)}>
                Edit
              </Button>
            </Box>
            <Box>
              <Text fontWeight="bold">Time Slot:</Text>
              <Text>{timeSlot || "Not selected"}</Text>
              <Button size="sm" onClick={() => editStep(4)}>
                Edit
              </Button>
            </Box>
            <Box>
              <Text fontWeight="bold">Payment Method:</Text>
              <Text>{paymentMethod || "Not selected"}</Text>
              <Button size="sm" onClick={() => editStep(5)}>
                Edit
              </Button>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default Index;
