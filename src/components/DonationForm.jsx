import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DonationForm = ({ selectedAmount, donorInfo, paymentMethod, onInputChange, onPaymentMethodChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={donorInfo.name}
        onChange={onInputChange}
        required
        className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        value={donorInfo.phone}
        onChange={onInputChange}
        required
        className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
      />
      <Textarea
        name="reason"
        placeholder="Why are you contributing to ComicFix?"
        value={donorInfo.reason}
        onChange={onInputChange}
        required
        className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
      />
      <Select onValueChange={onPaymentMethodChange}>
        <SelectTrigger className="w-full bg-gray-800 text-white border-golden">
          <SelectValue placeholder="Select payment method" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 text-white">
          <SelectItem value="upi">UPI</SelectItem>
          <SelectItem value="debit">Debit Card</SelectItem>
          <SelectItem value="bank">Bank Transfer (IFSC)</SelectItem>
        </SelectContent>
      </Select>
      {paymentMethod === 'debit' && (
        <>
          <Input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={donorInfo.cardNumber}
            onChange={onInputChange}
            required
            className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
          />
          <div className="flex space-x-2">
            <Input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={donorInfo.expiryDate}
              onChange={onInputChange}
              required
              className="w-1/2 p-2 border border-golden rounded bg-gray-800 text-white"
            />
            <Input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={donorInfo.cvv}
              onChange={onInputChange}
              required
              className="w-1/2 p-2 border border-golden rounded bg-gray-800 text-white"
            />
          </div>
        </>
      )}
      {paymentMethod === 'bank' && (
        <>
          <Input
            type="text"
            name="bankName"
            placeholder="Bank Name"
            value={donorInfo.bankName}
            onChange={onInputChange}
            required
            className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
          />
          <Input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            value={donorInfo.accountNumber}
            onChange={onInputChange}
            required
            className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
          />
          <Input
            type="text"
            name="ifscCode"
            placeholder="IFSC Code"
            value={donorInfo.ifscCode}
            onChange={onInputChange}
            required
            className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
          />
        </>
      )}
      <Button 
        type="submit"
        className="w-full bg-golden text-black hover:bg-yellow-600"
      >
        Contribute ₹{selectedAmount.toLocaleString('en-IN')}
      </Button>
    </form>
  );
};

export default DonationForm;