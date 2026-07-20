import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

export default function DashboardScreen() {
  const [transcriptions, setTranscriptions] = useState([]);
  const [usageMinutes, setUsageMinutes] = useState(0);

  const handleUpload = () => {
    const newTranscription = {
      id: Date.now().toString(),
      name: 'Meeting ' + new Date().toLocaleDateString(),
      duration: 15,
      status: 'processing',
    };
    setTranscriptions([newTranscription, ...transcriptions]);
    setTimeout(() => {
      setTranscriptions(prev =>
        prev.map(t =>
          t.id === newTranscription.id ? { ...t, status: 'completed' } : t
        )
      );
      setUsageMinutes(prev => prev + 15);
    }, 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={styles.usage}>
          <Text style={styles.usageText}>{usageMinutes} / 60 min</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${(usageMinutes / 60) * 100}%` }]} />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Text style={styles.uploadIcon}>🎙️</Text>
        <Text style={styles.uploadText}>Upload Meeting</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent</Text>
        {transcriptions.length === 0 ? (
          <Text style={styles.emptyText}>No transcriptions yet</Text>
        ) : (
          <FlatList
            data={transcriptions}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.transcriptionItem}>
                <View>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemMeta}>{item.duration} min • {item.status}</Text>
                </View>
                <Text style={styles.itemArrow}>→</Text>
              </View>
            )}
          />
        )}
      </View>

      <TouchableOpacity style={styles.upgradeButton}>
        <Text style={styles.upgradeText}>Upgrade to Pro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a' },
  header: { padding: 16, backgroundColor: '#1a1a1a', borderBottomWidth: 1, borderBottomColor: '#333333' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 12 },
  usage: { gap: 8 },
  usageText: { fontSize: 12, color: '#a0a0a0' },
  progressBar: { height: 4, backgroundColor: '#2a2a2a', borderRadius: 2, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#3b82f6' },
  uploadButton: {
    margin: 16,
    padding: 24,
    backgroundColor: '#1a1a1a',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#333333',
    borderRadius: 12,
    alignItems: 'center',
  },
  uploadIcon: { fontSize: 32, marginBottom: 8 },
  uploadText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  section: { padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#fff', marginBottom: 12 },
  emptyText: { color: '#a0a0a0', textAlign: 'center', paddingVertical: 24 },
  transcriptionItem: {
    backgroundColor: '#1a1a1a',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: { color: '#fff', fontSize: 14, fontWeight: '600' },
  itemMeta: { color: '#a0a0a0', fontSize: 12, marginTop: 4 },
  itemArrow: { color: '#3b82f6', fontSize: 16 },
  upgradeButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    alignItems: 'center',
  },
  upgradeText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
