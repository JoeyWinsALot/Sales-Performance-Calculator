# Advanced Sales Performance Calculator

This project is an advanced web-based Sales Performance Calculator that mirrors the functionality of a comprehensive spreadsheet tool. The tool includes input fields for various sales metrics, performs automated calculations, displays results dynamically in a user-friendly interface, and provides contextual explanations for each field. The final version is styled for clarity, fully responsive, and ready to embed seamlessly into GoHighLevel dashboards and funnels using an iframe.

## Features

- Input fields for various sales metrics
- Real-time calculations and dynamic updates
- Clear and user-friendly interface
- Contextual explanations for each metric
- Responsive design for desktop, tablet, and mobile devices
- Ready to embed into GoHighLevel dashboards and funnels

## Metrics Included

- New Leads
- Engaged Leads
- Qualified Leads
- Appointments Booked
- Appointments Showed
- New Sales
- Sales from Referrals
- Churn/Refund Rate (%)
- Sales & Marketing Costs
- Product & Operational Costs

## Calculated Results

- Net Profit
- Gross Profit per Customer
- Average Cost Per Acquisition (CAC)
- Refund Rate Impact
- Churn Costs

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/performance-calculator.git
    cd performance-calculator
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application locally:
    ```bash
    npm start
    ```

4. Open `index.html` in a web browser to view the application.

## Deployment

The project is configured to deploy to GitHub Pages using GitHub Actions. To deploy the application:

1. Push your changes to the `main` branch.
2. The GitHub Actions workflow will automatically build and deploy the application to GitHub Pages.

## Embedding into GoHighLevel

To embed the Sales Performance Calculator into GoHighLevel dashboards and funnels, use the following iframe code:

```html
<iframe 
    src="https://your-username.github.io/performance-calculator/"
    width="100%" 
    height="800px" 
    style="border: none;">
</iframe>
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
