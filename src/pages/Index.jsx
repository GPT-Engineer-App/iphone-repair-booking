import { useState } from "react";
import { Container, VStack, HStack, Text, Select, Checkbox, CheckboxGroup, Input, Button, Radio, RadioGroup, Stack, FormControl, FormLabel, IconButton } from "@chakra-ui/react";
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

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
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
      </VStack>
    </Container>
  );
};

export default Index;
