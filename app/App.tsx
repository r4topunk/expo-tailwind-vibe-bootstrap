import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { create } from 'twrnc';

// Initialize Tailwind
const tw = create();

// Define schema with Zod
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

export default function App() {
  const { control } = useForm<FormData>();

  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <StatusBar style="auto" />
      <Text>
        Hello, World!
      </Text>
    </View>
  );
}
