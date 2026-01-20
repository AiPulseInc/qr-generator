import {useCallback, RefObject} from 'react';
import {Alert} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Share from 'react-native-share';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {captureRef} from 'react-native-view-shot';
import type {View} from 'react-native';

export const useQRActions = (qrViewRef: RefObject<View | null>) => {
  const copyToClipboard = useCallback(
    async (payload: string) => {
      if (!qrViewRef.current) {
        Clipboard.setString(payload);
        Alert.alert('Copied', 'QR code data copied to clipboard');
        return;
      }

      try {
        const base64 = await captureRef(qrViewRef, {
          format: 'png',
          quality: 1,
          result: 'base64',
        });

        Clipboard.setImage(base64);
        Alert.alert('Copied', 'QR code copied to clipboard');
      } catch {
        Clipboard.setString(payload);
        Alert.alert('Copied', 'QR code data copied to clipboard');
      }
    },
    [qrViewRef],
  );

  const shareQRCode = useCallback(async () => {
    if (!qrViewRef.current) {
      return;
    }

    try {
      const uri = await captureRef(qrViewRef, {
        format: 'png',
        quality: 1,
      });

      await Share.open({
        url: uri,
        type: 'image/png',
      });
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'message' in error &&
        (error as {message?: string}).message !== 'User did not share'
      ) {
        Alert.alert('Error', 'Failed to share QR code');
      }
    }
  }, [qrViewRef]);

  const saveToPhotos = useCallback(async () => {
    if (!qrViewRef.current) {
      return;
    }

    try {
      const uri = await captureRef(qrViewRef, {
        format: 'png',
        quality: 1,
      });

      await CameraRoll.saveAsset(uri, {type: 'photo'});
      Alert.alert('Saved', 'QR code saved to your photo library');
    } catch (error) {
      Alert.alert('Error', 'Failed to save QR code. Please check permissions.');
    }
  }, [qrViewRef]);

  return {
    copyToClipboard,
    shareQRCode,
    saveToPhotos,
  };
};
