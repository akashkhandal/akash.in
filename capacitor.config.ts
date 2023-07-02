import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'project',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
