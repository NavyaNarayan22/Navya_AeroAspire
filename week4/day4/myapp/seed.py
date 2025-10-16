from app import app, db, User, Channel

def seed_data():
    with app.app_context():
        # Sample channels
        ch1 = Channel(name="TechTalks")
        ch2 = Channel(name="DailyVlogs")
        ch3 = Channel(name="MusicHub")

        # Sample users
        u1 = User(name="Navya")
        u2 = User(name="Aarav")
        u3 = User(name="Diya")

        # Add relationships
        u1.following.append(ch1)
        u1.following.append(ch2)
        u2.following.append(ch3)
        u3.following.extend([ch1, ch3])

        db.session.add_all([u1, u2, u3, ch1, ch2, ch3])
        db.session.commit()
        print("✅ Database seeded successfully!")

if __name__ == "__main__":
    seed_data()
