<Segment clearing>
          <Form>
          <Form.Field>
              <label htmlFor="existingLender ">Existing Lender</label>
              <input
                onChange={handleInputChange}
                placeholder="Existing Lender"
                name="existingLender"
                value={formData.existingLender}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="currentMortgageBalance ">Current Mortgage Balance</label>
              <input
                onChange={handleInputChange}
                placeholder="Current Mortgage Balance"
                name="currentMortgageBalance"
                value={formData.currentMortgageBalance}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="remoPurchaseDate ">Remo Purchase Date</label>
              <input
                onChange={handleInputChange}
                placeholder="Remo Purchase Date"
                name="remoPurchaseDate"
                value={formData.remoPurchaseDate}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="currentRepaymentMethod ">Current Repayment Method</label>
              <input
                onChange={handleInputChange}
                placeholder="Current Repayment Method"
                name="currentRepaymentMethod"
                value={formData.currentRepaymentMethod}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="currentMortgagePayment ">Current Mortgage Payment</label>
              <input
                onChange={handleInputChange}
                placeholder="Current Mortgage Payment"
                name="currentMortgagePayment"
                value={formData.currentMortgagePayment}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="ercEndDate">ERC End Date</label>
              <input
                onChange={handleInputChange}
                placeholder="Existing Lender"
                name="ERC End Date"
                value={formData.ercEndDate}
              />
            </Form.Field>
          </Form>
        </Segment>