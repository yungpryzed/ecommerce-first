import LoginForm from '../../components/forms/LoginForm';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Login - E-commerce',
  description: 'Accedi al tuo account',
};

export default function LoginPage() {
  return <LoginForm />;
}