# Academic Performance and Study Time Prediction

## Project Overview
This project implements a machine learning solution to predict the study time needed for academic exams using Linear Regression. The model helps students plan efficient study schedules by predicting how many hours they need to study to reach their target score.

## Dataset
- **File**: `STUDYTIME.csv`
- **Records**: 44 student samples
- **Features**: 13 columns including academic performance metrics

## Key Features Used for Prediction
1. **Prior_Exam_Score** - Previous exam performance (0-100)
2. **Difficulty_Rating** - Subject difficulty level (1-5)
3. **Topic_Familiarity** - Student's familiarity with topic (1-5)
4. **Past_Study_Hours** - Hours previously studied
5. **Practice_Questions_Completed** - Number of practice questions done

## Target Variable
- **Study_Hours_Needed** - Hours required to reach target score

## Implementation
The complete implementation is provided in the Jupyter notebook:
- **Main Notebook**: `Academic_Performance_Study_Time_Prediction.ipynb`

### What's Included:
- ✅ Data preprocessing and cleaning
- ✅ Exploratory data analysis with visualizations
- ✅ Theory of scale of measurement
- ✅ Linear regression model development
- ✅ Model evaluation (MAE/RMSE vs baseline)
- ✅ Feature importance analysis
- ✅ Model interpretation and conclusions
- ✅ Practical case study demonstration
- ✅ Cross-validation and model validation

## Requirements
Install required packages:
```bash
pip install -r requirements.txt
```

## How to Run
1. Clone the repository
2. Install dependencies: `pip install -r requirements.txt`
3. Open Jupyter Notebook: `jupyter notebook`
4. Run `Academic_Performance_Study_Time_Prediction.ipynb`

## Model Performance
The linear regression model provides:
- Predictive capability for study time planning
- Baseline comparison and improvement metrics
- Feature importance insights
- Practical recommendations for students

## Use Cases
- **Individual Study Planning**: Personalized study time estimates
- **Academic Counseling**: Data-driven student guidance
- **Course Design**: Study time estimation for educators
- **Resource Allocation**: Educational planning and support

## Project Structure
```
ML-TASK/
├── STUDYTIME.csv                                    # Dataset
├── Academic_Performance_Study_Time_Prediction.ipynb # Main notebook
├── requirements.txt                                 # Dependencies
└── README.md                                       # This file
```

## Theory of Scale of Measurement
The project includes comprehensive coverage of measurement scales:
- **Nominal Scale**: Categories without order
- **Ordinal Scale**: Ordered categories (difficulty, familiarity ratings)
- **Interval Scale**: Equal intervals, no true zero
- **Ratio Scale**: Equal intervals with true zero (scores, hours, counts)

## Model Insights
The model reveals which factors most significantly impact study time requirements and provides actionable insights for academic success.