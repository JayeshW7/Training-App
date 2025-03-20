export const workouts = {
  strength: [
    {
      id: 1,
      title: "Full Body Power",
      duration: "45 min",
      level: "Intermediate",
      description: "A complete full-body workout focusing on building strength and muscle.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      exercises: [
        {
          name: "Push-ups",
          sets: 3,
          reps: "12-15",
          duration: "60 sec",
          videoUrl: "", // Placeholder for video URL
          instructions: "1. Start in a plank position\n2. Lower your body until your chest nearly touches the floor\n3. Push back up to starting position\n4. Maintain a straight body throughout"
        },
        {
          name: "Squats",
          sets: 4,
          reps: "15",
          duration: "90 sec",
          videoUrl: "", // Placeholder for video URL
          instructions: "1. Stand with feet shoulder-width apart\n2. Lower your body as if sitting back into a chair\n3. Keep chest up and back straight\n4. Return to standing position"
        },
        {
          name: "Dumbbell Rows",
          sets: 3,
          reps: "12 each side",
          duration: "60 sec",
          videoUrl: "", // Placeholder for video URL
          instructions: "1. Place one knee and hand on bench\n2. Pull dumbbell to chest level\n3. Lower with control\n4. Maintain flat back position"
        }
      ]
    },
    {
      id: 2,
      title: "Upper Body Focus",
      duration: "40 min",
      level: "Beginner",
      description: "Build upper body strength with this targeted workout routine.",
      image: "https://images.unsplash.com/photo-1590507621108-433608c97823?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          reps: "10-12",
          duration: "60 sec",
          videoUrl: "", // Placeholder for video URL
          instructions: "1. Lie on bench with feet flat on floor\n2. Grip barbell slightly wider than shoulders\n3. Lower bar to chest with control\n4. Press back up to starting position"
        },
        {
          name: "Shoulder Press",
          sets: 3,
          reps: "12",
          duration: "60 sec",
          videoUrl: "", // Placeholder for video URL
          instructions: "1. Stand with dumbbells at shoulder height\n2. Press weights overhead\n3. Lower back to shoulders with control\n4. Keep core engaged throughout"
        }
      ]
    }
  ],
  cardio: [
    {
      id: 3,
      title: "HIIT Blast",
      duration: "30 min",
      level: "Advanced",
      description: "High-intensity interval training to boost cardio and burn calories.",
      image: "https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      exercises: [
        {
          name: "Burpees",
          sets: 4,
          reps: "45 seconds",
          duration: "45 sec",
          videoUrl: "", // Placeholder for video URL
          instructions: "1. Start standing, drop to push-up position\n2. Perform push-up\n3. Jump feet forward\n4. Jump up with hands overhead"
        },
        {
          name: "Mountain Climbers",
          sets: 4,
          reps: "60 seconds",
          duration: "60 sec",
          videoUrl: "", // Placeholder for video URL
          instructions: "1. Start in plank position\n2. Drive knees alternately to chest\n3. Keep hips level\n4. Maintain fast pace"
        }
      ]
    }
  ],
  flexibility: [
    {
      id: 4,
      title: "Dynamic Stretch",
      duration: "35 min",
      level: "Beginner",
      description: "Improve flexibility and mobility with dynamic stretching routines.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      exercises: [
        {
          name: "Sun Salutation",
          sets: 3,
          reps: "5 flows",
          duration: "120 sec",
          videoUrl: "", // Placeholder for video URL
          instructions: "1. Start in mountain pose\n2. Forward fold\n3. Plank position\n4. Flow through poses with breath"
        },
        {
          name: "Dynamic Lunges",
          sets: 2,
          reps: "10 each side",
          duration: "90 sec",
          videoUrl: "", // Placeholder for video URL
          instructions: "1. Step forward into lunge\n2. Pulse in lunge position\n3. Step back to starting position\n4. Alternate legs"
        }
      ]
    }
  ]
} 