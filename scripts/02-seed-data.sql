-- Insert sample specialties
INSERT INTO specialties (name, description, icon) VALUES
('Cardiology', 'Heart and cardiovascular system specialists', '❤️'),
('Dermatology', 'Skin, hair, and nail specialists', '🧴'),
('Neurology', 'Brain and nervous system specialists', '🧠'),
('Orthopedics', 'Bone, joint, and muscle specialists', '🦴'),
('Pediatrics', 'Child healthcare specialists', '👶'),
('Psychiatry', 'Mental health specialists', '🧘'),
('General Medicine', 'Primary care physicians', '🩺'),
('Gynecology', 'Women''s health specialists', '👩‍⚕️'),
('Ophthalmology', 'Eye care specialists', '👁️'),
('ENT', 'Ear, nose, and throat specialists', '👂')
ON CONFLICT (name) DO NOTHING;

-- Insert sample users
INSERT INTO users (id, name, email, phone, role, verified, avatar_url) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Dr. Sarah Johnson', 'sarah.johnson@email.com', '+1234567890', 'doctor', true, '/placeholder.svg?height=100&width=100'),
('550e8400-e29b-41d4-a716-446655440002', 'Dr. Michael Chen', 'michael.chen@email.com', '+1234567891', 'doctor', true, '/placeholder.svg?height=100&width=100'),
('550e8400-e29b-41d4-a716-446655440003', 'Dr. Emily Rodriguez', 'emily.rodriguez@email.com', '+1234567892', 'doctor', true, '/placeholder.svg?height=100&width=100'),
('550e8400-e29b-41d4-a716-446655440004', 'John Smith', 'john.smith@email.com', '+1234567893', 'patient', true, '/placeholder.svg?height=100&width=100'),
('550e8400-e29b-41d4-a716-446655440005', 'Admin User', 'admin@docbook.com', '+1234567894', 'admin', true, '/placeholder.svg?height=100&width=100')
ON CONFLICT (email) DO NOTHING;

-- Insert sample doctors
INSERT INTO doctors (id, user_id, specialty, experience, degrees, clinic_name, clinic_address, fee, languages, teleconsultation_available, bio, verified, rating, total_reviews) VALUES
('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'Cardiology', 12, ARRAY['MD', 'FACC'], 'Heart Care Clinic', '123 Medical Center Dr, New York, NY 10001', 200.00, ARRAY['English', 'Spanish'], true, 'Experienced cardiologist specializing in preventive cardiology and heart disease management.', true, 4.8, 156),
('660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', 'Dermatology', 8, ARRAY['MD', 'FAAD'], 'Skin Health Center', '456 Wellness Ave, Los Angeles, CA 90210', 150.00, ARRAY['English', 'Mandarin'], true, 'Board-certified dermatologist with expertise in medical and cosmetic dermatology.', true, 4.9, 203),
('660e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440003', 'Pediatrics', 15, ARRAY['MD', 'FAAP'], 'Children''s Medical Group', '789 Family Blvd, Chicago, IL 60601', 120.00, ARRAY['English', 'Spanish'], false, 'Dedicated pediatrician with over 15 years of experience in child healthcare.', true, 4.7, 89)
ON CONFLICT (id) DO NOTHING;

-- Insert sample availability
INSERT INTO availability (doctor_id, date, slots_available) VALUES
('660e8400-e29b-41d4-a716-446655440001', CURRENT_DATE + INTERVAL '1 day', '["09:00", "09:30", "10:00", "10:30", "14:00", "14:30", "15:00"]'),
('660e8400-e29b-41d4-a716-446655440001', CURRENT_DATE + INTERVAL '2 days', '["09:00", "09:30", "10:00", "11:00", "14:00", "15:00", "15:30"]'),
('660e8400-e29b-41d4-a716-446655440002', CURRENT_DATE + INTERVAL '1 day', '["10:00", "10:30", "11:00", "14:00", "14:30", "15:00", "16:00"]'),
('660e8400-e29b-41d4-a716-446655440003', CURRENT_DATE + INTERVAL '1 day', '["08:00", "08:30", "09:00", "13:00", "13:30", "14:00", "16:00"]')
ON CONFLICT (doctor_id, date) DO NOTHING;

-- Insert sample reviews
INSERT INTO reviews (patient_id, doctor_id, rating, experience_rating, behavior_rating, wait_time_rating, feedback) VALUES
('550e8400-e29b-41d4-a716-446655440004', '660e8400-e29b-41d4-a716-446655440001', 5, 5, 5, 4, 'Excellent doctor! Very thorough examination and clear explanations.'),
('550e8400-e29b-41d4-a716-446655440004', '660e8400-e29b-41d4-a716-446655440002', 5, 5, 5, 5, 'Amazing dermatologist. Solved my skin issues quickly and professionally.');
