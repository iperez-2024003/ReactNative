import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { COLORS, SPACING, FONT_SIZE } from '../../../shared/constants/theme';
import Input from '../../../shared/components/common/Input';
import Button from '../../../shared/components/common/Button';

import kinalSportLogo from '../../../../assets/kinal_sports.png';

const RegisterScreen = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = (data) => {
        // No hacer nada todavía, solo mostrar la UI
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Image
                        source={kinalSportLogo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.subtitle}>Crea tu cuenta</Text>

                    <Controller
                        control={control}
                        rules={{ required: 'Nombre completo requerido' }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Nombre completo"
                                placeholder="Tu nombre"
                                value={value}
                                onChangeText={onChange}
                                error={errors.fullName?.message}
                            />
                        )}
                        name="fullName"
                    />

                    <Controller
                        control={control}
                        rules={{ required: 'Correo requerido' }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Correo"
                                placeholder="correo@gmail.com"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                value={value}
                                onChangeText={onChange}
                                error={errors.email?.message}
                            />
                        )}
                        name="email"
                    />

                    <Controller
                        control={control}
                        rules={{ required: 'Contraseña requerida' }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Contraseña"
                                placeholder="********"
                                secureTextEntry
                                value={value}
                                onChangeText={onChange}
                                error={errors.password?.message}
                            />
                        )}
                        name="password"
                    />

                    <Controller
                        control={control}
                        rules={{ required: 'Confirmar contraseña requerida' }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Confirmar contraseña"
                                placeholder="********"
                                secureTextEntry
                                value={value}
                                onChangeText={onChange}
                                error={errors.confirmPassword?.message}
                            />
                        )}
                        name="confirmPassword"
                    />

                    <Button
                        title="Registrarme"
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}
                    />

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>¿Ya tienes una cuenta? </Text>
                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate('Login')}
                        >
                            Inicia sesión
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
        padding: SPACING.xl,
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: SPACING.xxl,
        width: '100%',
    },
    logo: {
        height: 80,
        width: 200,
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.secondary,
        marginTop: SPACING.sm,
    },
    button: {
        marginTop: SPACING.lg,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: SPACING.xl,
    },
    footerText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
    },
    link: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: '700',
    },
});

export default RegisterScreen;