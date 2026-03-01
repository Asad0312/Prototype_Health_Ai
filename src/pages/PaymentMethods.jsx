import React, { useState } from 'react';
import { CreditCard, Plus, Trash2, CheckCircle, Shield, DollarSign, Calendar } from 'lucide-react';
import './PaymentMethods.css';

const PaymentMethods = () => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'visa',
      last4: '4242',
      expMonth: 12,
      expYear: 25,
      name: 'Sarah Johnson',
      isDefault: true
    },
    {
      id: 2,
      type: 'mastercard',
      last4: '8888',
      expMonth: 8,
      expYear: 24,
      name: 'Sarah Johnson',
      isDefault: false
    }
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2024-02-15',
      description: 'Dr. Sarah Smith - Cardiology Consultation',
      amount: 150.00,
      status: 'paid',
      paymentMethod: 'Visa •• 4242'
    },
    {
      id: 2,
      date: '2024-02-10',
      description: 'Lab Tests - Complete Blood Count',
      amount: 85.50,
      status: 'paid',
      paymentMethod: 'Mastercard •• 8888'
    },
    {
      id: 3,
      date: '2024-02-05',
      description: 'Medication - Lisinopril 30-day supply',
      amount: 25.99,
      status: 'paid',
      paymentMethod: 'Visa •• 4242'
    },
    {
      id: 4,
      date: '2024-02-20',
      description: 'Dr. Michael Chen - Endocrinology Visit',
      amount: 200.00,
      status: 'pending',
      paymentMethod: 'Insurance - Pending'
    }
  ]);

  const [newCard, setNewCard] = useState({
    cardNumber: '',
    cardName: '',
    expMonth: '',
    expYear: '',
    cvv: '',
    setDefault: false
  });

  const handleAddCard = (e) => {
    e.preventDefault();
    const last4 = newCard.cardNumber.slice(-4);
    const newPaymentMethod = {
      id: Date.now(),
      type: newCard.cardNumber.startsWith('4') ? 'visa' : 'mastercard',
      last4: last4,
      expMonth: parseInt(newCard.expMonth),
      expYear: parseInt(newCard.expYear),
      name: newCard.cardName,
      isDefault: newCard.setDefault
    };

    if (newCard.setDefault) {
      setPaymentMethods(methods =>
        methods.map(m => ({ ...m, isDefault: false }))
      );
    }

    setPaymentMethods([...paymentMethods, newPaymentMethod]);
    setShowAddCard(false);
    setNewCard({
      cardNumber: '',
      cardName: '',
      expMonth: '',
      expYear: '',
      cvv: '',
      setDefault: false
    });
  };

  const setDefaultMethod = (id) => {
    setPaymentMethods(methods =>
      methods.map(m => ({
        ...m,
        isDefault: m.id === id
      }))
    );
  };

  const deleteMethod = (id) => {
    setPaymentMethods(methods => methods.filter(m => m.id !== id));
  };

  const totalSpent = transactions
    .filter(t => t.status === 'paid')
    .reduce((sum, t) => sum + t.amount, 0);

  const pendingAmount = transactions
    .filter(t => t.status === 'pending')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="payment-container">
      <div className="payment-header">
        <div>
          <h1>Payment Methods</h1>
          <p>Manage your payment options and view billing history</p>
        </div>
        <button 
          className="btn-primary"
          onClick={() => setShowAddCard(!showAddCard)}
        >
          <Plus size={18} />
          {showAddCard ? 'Cancel' : 'Add Payment Method'}
        </button>
      </div>

      {/* Stats Cards */}
      <div className="payment-stats">
        <div className="stat-card">
          <DollarSign size={24} color="#2A7A8C" />
          <div>
            <h3>${totalSpent.toFixed(2)}</h3>
            <p>Total Paid</p>
          </div>
        </div>
        <div className="stat-card">
          <Calendar size={24} color="#F4A261" />
          <div>
            <h3>${pendingAmount.toFixed(2)}</h3>
            <p>Pending</p>
          </div>
        </div>
        <div className="stat-card">
          <CreditCard size={24} color="#4A90E2" />
          <div>
            <h3>{paymentMethods.length}</h3>
            <p>Saved Cards</p>
          </div>
        </div>
      </div>

      {/* Add Card Form */}
      {showAddCard && (
        <div className="add-card-form">
          <h2>Add New Card</h2>
          <form onSubmit={handleAddCard}>
            <div className="form-group">
              <label>Card Number *</label>
              <input
                type="text"
                required
                maxLength="16"
                value={newCard.cardNumber}
                onChange={(e) => setNewCard({...newCard, cardNumber: e.target.value.replace(/\D/g, '')})}
                placeholder="4242 4242 4242 4242"
              />
            </div>

            <div className="form-group">
              <label>Cardholder Name *</label>
              <input
                type="text"
                required
                value={newCard.cardName}
                onChange={(e) => setNewCard({...newCard, cardName: e.target.value})}
                placeholder="Sarah Johnson"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry Month *</label>
                <select
                  required
                  value={newCard.expMonth}
                  onChange={(e) => setNewCard({...newCard, expMonth: e.target.value})}
                >
                  <option value="">MM</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                    <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Expiry Year *</label>
                <select
                  required
                  value={newCard.expYear}
                  onChange={(e) => setNewCard({...newCard, expYear: e.target.value})}
                >
                  <option value="">YY</option>
                  {Array.from({ length: 10 }, (_, i) => 24 + i).map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>CVV *</label>
                <input
                  type="text"
                  required
                  maxLength="3"
                  value={newCard.cvv}
                  onChange={(e) => setNewCard({...newCard, cvv: e.target.value.replace(/\D/g, '')})}
                  placeholder="123"
                />
              </div>
            </div>

            <div className="form-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={newCard.setDefault}
                  onChange={(e) => setNewCard({...newCard, setDefault: e.target.checked})}
                />
                Set as default payment method
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Add Card
              </button>
            </div>

            <div className="secure-badge">
              <Shield size={16} color="#2E7D32" />
              <span>Your payment information is secure and encrypted</span>
            </div>
          </form>
        </div>
      )}

      {/* Saved Cards */}
      <div className="saved-cards-section">
        <h2>Saved Payment Methods</h2>
        <div className="cards-grid">
          {paymentMethods.map(method => (
            <div key={method.id} className={`card-item ${method.isDefault ? 'default' : ''}`}>
              <div className="card-header">
                <CreditCard size={32} color={method.type === 'visa' ? '#1A1F71' : '#EB001B'} />
                {method.isDefault && (
                  <span className="default-badge">
                    <CheckCircle size={14} /> Default
                  </span>
                )}
              </div>
              <div className="card-number">
                •••• •••• •••• {method.last4}
              </div>
              <div className="card-details">
                <span>{method.name}</span>
                <span>Exp: {method.expMonth}/{method.expYear}</span>
              </div>
              <div className="card-actions">
                {!method.isDefault && (
                  <>
                    <button 
                      className="btn-outline small"
                      onClick={() => setDefaultMethod(method.id)}
                    >
                      Set Default
                    </button>
                    <button 
                      className="btn-outline small danger"
                      onClick={() => deleteMethod(method.id)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="transactions-section">
        <h2>Recent Transactions</h2>
        <div className="transactions-list">
          {transactions.map(transaction => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-info">
                <h4>{transaction.description}</h4>
                <p>{transaction.date} • {transaction.paymentMethod}</p>
              </div>
              <div className="transaction-amount">
                <span className={transaction.status === 'paid' ? 'paid' : 'pending'}>
                  ${transaction.amount.toFixed(2)}
                </span>
                <span className={`status-badge ${transaction.status}`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance Info */}
      <div className="insurance-section">
        <h2>Insurance Information</h2>
        <div className="insurance-card">
          <div className="insurance-header">
            <Shield size={24} color="#2A7A8C" />
            <span className="provider">Blue Cross Blue Shield</span>
          </div>
          <div className="insurance-details">
            <div className="detail-row">
              <span>Policy Number:</span>
              <strong>BCBS-1234-5678</strong>
            </div>
            <div className="detail-row">
              <span>Group Number:</span>
              <strong>GRP-9876</strong>
            </div>
            <div className="detail-row">
              <span>Coverage:</span>
              <strong>80% after $500 deductible</strong>
            </div>
            <div className="detail-row">
              <span>Valid Until:</span>
              <strong>12/2024</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;