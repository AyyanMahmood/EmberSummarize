import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>MeetingMind</Text>
        <Text style={styles.subtitle}>Transcribe & Summarize Instantly</Text>
      </View>

      <View style={styles.features}>
        <FeatureCard icon="🎙️" title="Record" desc="Capture meetings in real-time" />
        <FeatureCard icon="📤" title="Upload" desc="Add existing audio files" />
        <FeatureCard icon="✨" title="Transcribe" desc="Get accurate transcriptions" />
        <FeatureCard icon="📝" title="Summarize" desc="Extract key points automatically" />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/dashboard')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <View style={styles.pricing}>
        <Text style={styles.pricingTitle}>Pricing</Text>
        <PricingCard plan="Free" price="$0" minutes="60/month" />
        <PricingCard plan="Pro" price="$9" minutes="1000/month" isPrimary />
      </View>
    </ScrollView>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <View style={styles.featureCard}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDesc}>{desc}</Text>
    </View>
  );
}

function PricingCard({ plan, price, minutes, isPrimary }) {
  return (
    <View style={[styles.pricingCard, isPrimary && styles.pricingCardPrimary]}>
      <Text style={styles.planName}>{plan}</Text>
      <Text style={styles.planPrice}>{price}</Text>
      <Text style={styles.planMinutes}>{minutes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a' },
  hero: { padding: 24, alignItems: 'center', marginTop: 40 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#a0a0a0' },
  features: { padding: 16, gap: 12 },
  featureCard: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333333',
  },
  featureIcon: { fontSize: 24, marginBottom: 8 },
  featureTitle: { fontSize: 14, fontWeight: '600', color: '#fff', marginBottom: 4 },
  featureDesc: { fontSize: 12, color: '#a0a0a0' },
  button: {
    backgroundColor: '#3b82f6',
    marginHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 24,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  pricing: { padding: 16, marginBottom: 40 },
  pricingTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 12 },
  pricingCard: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 12,
  },
  pricingCardPrimary: { borderColor: '#3b82f6', borderWidth: 2 },
  planName: { fontSize: 16, fontWeight: '600', color: '#fff' },
  planPrice: { fontSize: 24, fontWeight: 'bold', color: '#3b82f6', marginVertical: 8 },
  planMinutes: { fontSize: 12, color: '#a0a0a0' },
});
