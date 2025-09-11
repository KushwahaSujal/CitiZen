# SmartCivic Backend

A Next.js-powered backend system for civic issue reporting and management with AI classification capabilities.

## 🚀 Features

- **AI-Powered Classification**: Automatically classifies civic issues using TensorFlow.js
- **Real-time Updates**: Live status updates using Supabase Realtime
- **Geospatial Queries**: Location-based issue filtering and nearby issue detection
- **Department Routing**: Smart routing of issues to appropriate city departments
- **Reward System**: Points and badges for active citizens
- **RESTful API**: Comprehensive API for mobile and web applications
- **Authentication**: JWT-based authentication with role-based access control
- **File Upload**: Image upload support for issue documentation

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Database**: Supabase (PostgreSQL with PostGIS)
- **ML Framework**: TensorFlow.js / TensorFlow Python
- **Authentication**: JWT + Supabase Auth
- **Validation**: Zod
- **Image Processing**: Sharp
- **Language**: TypeScript

## 📁 Project Structure

```
smartcivic-backend/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── auth/         # Authentication endpoints
│   │   │   ├── issues/       # Issue management
│   │   │   ├── users/        # User management
│   │   │   └── admin/        # Admin endpoints
│   │   └── globals.css
│   ├── lib/
│   │   ├── database/         # Database utilities
│   │   ├── ai/              # ML models and utilities
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Helper functions
│   │   ├── middleware/      # Auth and other middleware
│   │   └── config/          # Configuration files
│   └── types/               # TypeScript definitions
├── public/
│   └── models/              # TensorFlow.js models
├── tests/                   # Test files
└── scripts/                 # Utility scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd smartcivic-backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Fill in your Supabase and other configuration details in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
JWT_SECRET=your-very-long-random-string-here
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 API Documentation

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### Issues

- `GET /api/issues` - Get all issues (with filters)
- `POST /api/issues` - Create new issue
- `GET /api/issues/[id]` - Get specific issue
- `PUT /api/issues/[id]` - Update issue
- `DELETE /api/issues/[id]` - Delete issue
- `POST /api/issues/classify` - AI classification
- `GET /api/issues/nearby` - Get nearby issues

### Users

- `GET /api/users` - Get all users
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/rewards` - Get user rewards

### Admin

- `GET /api/admin/dashboard` - Admin dashboard data
- `GET /api/admin/analytics` - System analytics
- `GET /api/admin/reports` - Generate reports

## 🤖 ML Model Integration

The system supports TensorFlow.js models for real-time classification:

1. **Place your trained model** in `public/models/issue-classifier/`
2. **Model files needed**:
   - `model.json` - Model architecture
   - `model.weights.bin` - Model weights
   - `metadata.json` - Class names and config

3. **The classification endpoint** (`/api/issues/classify`) will automatically load and use your model

## 🗄 Database Schema

The system uses Supabase with the following main tables:

- `users` - User accounts and profiles
- `issues` - Civic issues reported by users
- `departments` - City departments
- `workers` - Department workers
- `notifications` - System notifications
- `rewards` - Available rewards
- `user_rewards` - Redeemed rewards

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:ci
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### Docker

```bash
# Build Docker image
docker build -t smartcivic-backend .

# Run container
docker run -p 3000:3000 smartcivic-backend
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |
| `JWT_SECRET` | JWT signing secret | Yes |
| `NODE_ENV` | Environment (development/production) | No |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for your changes
5. Run the test suite
6. Create a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the GitHub repository
- Check the documentation
- Contact the development team

## 🔄 Version History

- **v0.1.0** - Initial release with basic functionality
- More versions coming soon...

---

**Made with ❤️ for better civic engagement**